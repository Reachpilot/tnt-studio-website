import { Video } from '@/types';
import { DEFAULT_THUMBNAIL } from './placeholders';

const generateId = () => {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }

  // Fallback for environments where crypto.randomUUID is not available
  return 'vid-' + Math.random().toString(36).slice(2, 11) + Date.now().toString(36);
};

// Key for localStorage
const STORAGE_KEY = 'videoReviewApp_videos';

// Load videos from localStorage or use empty array
const demoVideos: Video[] = [
  {
    id: 'vid-demo-1',
    title: 'Onboarding Clip',
    description: 'Kurze Einführung in den Ablauf.',
    fileName: 'onboarding.mp4',
    filePath: '/videos/demo1.mp4',
    thumbnailUrl: DEFAULT_THUMBNAIL,
    status: 'pending',
    uploadedAt: new Date(2026, 0, 28, 9, 0).toISOString(),
    duration: '02:45',
    size: '54 MB',
    uploader: 'Nina',
    comments: [],
  },
  {
    id: 'vid-demo-2',
    title: 'Produkt Teaser',
    description: '30 Sekunden Social Spot.',
    fileName: 'teaser.mp4',
    filePath: '/videos/demo2.mp4',
    thumbnailUrl: DEFAULT_THUMBNAIL,
    status: 'needs_revision',
    uploadedAt: new Date(2026, 0, 27, 14, 30).toISOString(),
    duration: '00:30',
    size: '12 MB',
    uploader: 'Lea',
    comments: [],
  },
];

const loadVideos = (): Video[] => {
  if (typeof window === 'undefined') return [...demoVideos];
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [...demoVideos];
};

// Save videos to localStorage
const saveVideos = (videos: Video[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(videos));
  }
};

// In-memory storage for videos with localStorage persistence
let videos: Video[] = loadVideos();
let mpuVideos: Video[] = [];

// Load MPU videos from localStorage
const loadMpuVideos = (): Video[] => {
  if (typeof window === 'undefined') return [];
  const saved = localStorage.getItem('mpu_videos');
  return saved ? JSON.parse(saved) : [];
};

// Save MPU videos to localStorage
const saveMpuVideos = (videos: Video[]) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('mpu_videos', JSON.stringify(videos));
  }
};

// Initialize MPU videos
mpuVideos = loadMpuVideos();

// Base URL for API requests
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Format file size
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};

export async function getVideos(isMpu = false): Promise<Video[]> {
  try {
    // In a real app, you would fetch from your API
    // const response = await fetch(`${API_URL}/api/videos${status ? `?status=${status}` : ''}`);
    // if (!response.ok) throw new Error('Failed to fetch videos');
    // return await response.json();
    
    // For now, return the in-memory array
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return isMpu ? [...mpuVideos] : [...videos];
  } catch (error) {
    console.error('Error fetching videos:', error);
    throw error;
  }
}

export async function replaceVideoFile(
  video: Video,
  file: File,
  duration: string,
  thumbnailDataUrl = '',
  isMpu = false
): Promise<Video> {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', video.title);
    formData.append('description', video.description || '');
    formData.append('duration', duration);
    formData.append('videoId', video.id);
    if (thumbnailDataUrl) {
      formData.append('thumbnail', thumbnailDataUrl);
    }

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || 'Video replacement failed');
    }

    const uploadedVideo = await response.json();
    const mergedVideo: Video = {
      ...video,
      ...uploadedVideo,
      thumbnailUrl: thumbnailDataUrl || uploadedVideo.thumbnailUrl || video.thumbnailUrl || DEFAULT_THUMBNAIL,
      comments: video.comments || [],
    };

    saveVideo(mergedVideo, isMpu);
    return mergedVideo;
  } catch (error) {
    console.error('Error replacing video:', error);
    throw error instanceof Error ? error : new Error('Failed to replace video');
  }
}

export async function updateVideoStatus(id: string, status: 'pending' | 'needs_revision' | 'approved', isMpu = false): Promise<Video> {
  try {
    // In a real app, you would make an API call here
    // const response = await fetch(`${API_URL}/api/videos/${id}/status`, {
    //   method: 'PUT',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ status })
    // });
    // if (!response.ok) throw new Error('Failed to update video status');
    // return await response.json();
    
    // For now, simulate API call with timeout and update in-memory array
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const targetVideos = isMpu ? mpuVideos : videos;
    const videoIndex = targetVideos.findIndex(v => v.id === id);
    if (videoIndex === -1) throw new Error('Video not found');
    
    const updatedVideo = { ...targetVideos[videoIndex], status };
    targetVideos[videoIndex] = updatedVideo;
    
    if (isMpu) {
      saveMpuVideos(targetVideos);
    } else {
      saveVideos(targetVideos);
    }
    
    return updatedVideo;
  } catch (error) {
    console.error('Error updating video status:', error);
    throw error;
  }
}

export async function uploadVideo(
  file: File,
  title: string,
  description: string,
  duration: string,
  thumbnailDataUrl = '',
  isMpu = false
): Promise<Video> {
  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('description', description);
    formData.append('duration', duration);
    if (thumbnailDataUrl) {
      formData.append('thumbnail', thumbnailDataUrl);
    }

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const message = await response.text();
      throw new Error(message || 'Upload failed');
    }

    const uploadedVideo = await response.json();
    const normalizedVideo: Video = {
      ...uploadedVideo,
      thumbnailUrl: thumbnailDataUrl || uploadedVideo.thumbnailUrl || DEFAULT_THUMBNAIL,
      comments: uploadedVideo.comments || [],
    };

    if (isMpu) {
      mpuVideos.unshift(normalizedVideo);
      saveMpuVideos(mpuVideos);
    } else {
      videos.unshift(normalizedVideo);
      saveVideos(videos);
    }

    return normalizedVideo;
  } catch (error) {
    console.error('Error uploading video:', error);
    throw error instanceof Error ? error : new Error('Failed to upload video');
  }
}

export function saveVideo(updatedVideo: Video, isMpu = false): Video {
  const targetVideos = isMpu ? mpuVideos : videos;
  const videoIndex = targetVideos.findIndex(v => v.id === updatedVideo.id);

  if (videoIndex === -1) {
    targetVideos.unshift(updatedVideo);
  } else {
    targetVideos[videoIndex] = updatedVideo;
  }

  if (isMpu) {
    saveMpuVideos(targetVideos);
  } else {
    saveVideos(targetVideos);
  }

  return updatedVideo;
}

export function deleteVideo(id: string, isMpu = false): Video | null {
  const targetVideos = isMpu ? mpuVideos : videos;
  const videoIndex = targetVideos.findIndex(v => v.id === id);
  if (videoIndex === -1) {
    return null;
  }

  const [removedVideo] = targetVideos.splice(videoIndex, 1);

  if (isMpu) {
    saveMpuVideos(targetVideos);
  } else {
    saveVideos(targetVideos);
  }

  return removedVideo;
}
