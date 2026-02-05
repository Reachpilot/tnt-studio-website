import { NextResponse } from 'next/server';
import { Video } from '@/types';
import { randomUUID } from 'crypto';

// In-memory storage (replace with a database in production)
let videos: Video[] = [];

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');

    let filteredVideos = [...videos];
    
    if (status && status !== 'all') {
      filteredVideos = filteredVideos.filter(video => video.status === status);
    }
    
    return NextResponse.json(filteredVideos);
  } catch (error) {
    console.error('Error fetching videos:', error);
    return NextResponse.json(
      { error: 'Failed to fetch videos' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const video = await request.json();
    const newVideo: Video = {
      ...video,
      id: randomUUID(),
      uploadedAt: new Date().toISOString(),
      status: 'pending',
      comments: []
    };
    
    videos.unshift(newVideo);
    
    return NextResponse.json(newVideo, { status: 201 });
  } catch (error) {
    console.error('Error creating video:', error);
    return NextResponse.json(
      { error: 'Failed to create video' },
      { status: 500 }
    );
  }
}
