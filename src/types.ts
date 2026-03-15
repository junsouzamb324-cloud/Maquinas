export type MachineState = 'bad' | 'regular' | 'good';

export interface RestorationService {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface BudgetRequest {
  id: string;
  name: string;
  phone: string;
  city: string;
  machineType: string;
  machineYear: string;
  description: string;
  photos: string[];
  status: 'received' | 'analyzing' | 'restoring' | 'finished';
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}
