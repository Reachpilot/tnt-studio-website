import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { randomUUID } from 'crypto';
import { DEFAULT_THUMBNAIL } from '@/lib/placeholders';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const thumbnail = formData.get('thumbnail') as string | null;
    const existingId = formData.get('videoId') as string | null;

    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }

    // Validate file type or extension (some browsers omit MIME type)
    const validMimeTypes = ['video/mp4', 'video/webm', 'video/quicktime'];
    const validExtensions = ['mp4', 'webm', 'mov'];
    const fileType = file.type?.toLowerCase() || '';
    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    const matchesMime = fileType ? validMimeTypes.includes(fileType) : false;
    const matchesExtension = fileExtension ? validExtensions.includes(fileExtension) : false;

    if (!matchesMime && !matchesExtension) {
      return NextResponse.json(
        { error: 'Invalid file type. Please upload a video file (MP4, WebM, or MOV)' },
        { status: 400 }
      );
    }

    // Check file size (max 100MB)
    const maxSize = 100 * 1024 * 1024; // 100MB
    if (file.size > maxSize) {
      return NextResponse.json(
        { error: 'File is too large. Maximum size is 100MB' },
        { status: 400 }
      );
    }

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Create a unique filename
    const safeExt = fileExtension || 'mp4';
    const fileName = `${randomUUID()}.${safeExt}`;
    
    // In a real app, you would upload to cloud storage (S3, etc.)
    // For demo purposes, we'll save to the public/uploads directory
    const uploadDir = join(process.cwd(), 'public/uploads');
    const thumbnailDir = join(uploadDir, 'thumbnails');
    const filePath = join(uploadDir, fileName);
    
    // Create the directory if it doesn't exist
    const fs = require('fs');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    if (!fs.existsSync(thumbnailDir)) {
      fs.mkdirSync(thumbnailDir, { recursive: true });
    }
    
    // Save the actual file to the uploads directory
    await writeFile(filePath, buffer);

    // Get duration from form data (calculated in the frontend)
    const duration = formData.get('duration') as string || '0:00';

    // In a real app, you would save this to a database
    let thumbnailUrl = DEFAULT_THUMBNAIL;
    if (thumbnail && typeof thumbnail === 'string' && thumbnail.startsWith('data:image')) {
      try {
        const [meta, base64Data] = thumbnail.split(',');
        const extensionMatch = meta?.match(/data:image\/(\w+);/);
        const extension = extensionMatch?.[1]?.toLowerCase() || 'jpeg';
        const bufferThumb = Buffer.from(base64Data, 'base64');
        const thumbFileName = `${fileName.replace(/\.[^/.]+$/, '')}-thumb.${extension === 'jpeg' ? 'jpg' : extension}`;
        const thumbPath = join(thumbnailDir, thumbFileName);
        await writeFile(thumbPath, bufferThumb);
        thumbnailUrl = `/uploads/thumbnails/${thumbFileName}`;
      } catch (error) {
        console.warn('Failed to persist thumbnail, using default placeholder.', error);
      }
    }

    const video = {
      id: existingId || randomUUID(),
      title: title || file.name.replace(/\.[^/.]+$/, ''),
      description: description || '',
      fileName: file.name,
      filePath: `/uploads/${fileName}`,
      status: 'pending',
      uploadedAt: new Date().toISOString(),
      duration: duration,
      size: formatFileSize(file.size),
      uploader: 'You', // In a real app, this would be the authenticated user
      comments: [],
      thumbnailUrl,
    };

    return NextResponse.json(video);
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}

// Helper function to format file size
function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
