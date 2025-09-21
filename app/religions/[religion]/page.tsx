import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { 
  deities, 
  holyBooks, 
  festivals, 
  sacredStories, 
  teachings,
  bhaktiVideos 
} from '@/lib/content';
import { ReligionClientPage } from '@/components/religion-client-page';

const religionData = {
  hinduism: {
    name: 'Hinduism',
    icon: '🕉️',
    description: 'One of the world\'s oldest religions, emphasizing dharma, karma, and the pursuit of moksha.',
    color: 'from-orange-500 to-red-500',
    bgColor: 'from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20'
  },
  christianity: {
    name: 'Christianity',
    icon: '✝️',
    description: 'Based on the teachings of Jesus Christ, emphasizing love, forgiveness, and salvation.',
    color: 'from-blue-500 to-purple-500',
    bgColor: 'from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20'
  },
  islam: {
    name: 'Islam',
    icon: '☪️',
    description: 'Submission to Allah, following the teachings of Prophet Muhammad (PBUH) and the Quran.',
    color: 'from-green-500 to-teal-500',
    bgColor: 'from-green-50 to-teal-50 dark:from-green-950/20 dark:to-teal-950/20'
  },
  buddhism: {
    name: 'Buddhism',
    icon: '☸️',
    description: 'The path to enlightenment through the Four Noble Truths and the Eightfold Path.',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20'
  },
  sikhism: {
    name: 'Sikhism',
    icon: '☬',
    description: 'Founded by Guru Nanak, emphasizing devotion to one God and service to humanity.',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20'
  },
  judaism: {
    name: 'Judaism',
    icon: '✡️',
    description: 'The covenant between God and the Jewish people, following the Torah and traditions.',
    color: 'from-purple-500 to-pink-500',
    bgColor: 'from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20'
  },
  others: {
    name: 'Other Traditions',
    icon: '🌍',
    description: 'Exploring diverse spiritual traditions from around the world.',
    color: 'from-gray-500 to-slate-500',
    bgColor: 'from-gray-50 to-slate-50 dark:from-gray-950/20 dark:to-slate-950/20'
  }
};

interface ReligionPageProps {
  params: {
    religion: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(religionData).map((religion) => ({
    religion,
  }));
}

export async function generateMetadata({ params }: ReligionPageProps): Promise<Metadata> {
  const religion = religionData[params.religion as keyof typeof religionData];
  
  if (!religion) {
    return {
      title: 'Religion Not Found - Divinora',
    };
  }

  return {
    title: `${religion.name} - Sacred Wisdom | Divinora`,
    description: religion.description,
  };
}

// This enables ISR (Incremental Static Regeneration)
export const revalidate = 3600; // Revalidate every hour

export default function ReligionPage({ params }: ReligionPageProps) {
  const religion = religionData[params.religion as keyof typeof religionData];
  
  if (!religion) {
    notFound();
  }

  const religionName = religion.name;
  
  // Filter content by religion
  const religionDeities = deities.filter(d => 
    d.religion.toLowerCase() === religionName.toLowerCase()
  );
  
  const religionBooks = holyBooks.filter(b => 
    b.religion.toLowerCase() === religionName.toLowerCase()
  );
  
  const religionFestivals = festivals.filter(f => 
    f.religion.toLowerCase() === religionName.toLowerCase()
  );
  
  const religionStories = sacredStories.filter(s => 
    s.religion.toLowerCase() === religionName.toLowerCase()
  );
  
  const religionTeachings = teachings.filter(t => 
    t.religions.some(r => r.toLowerCase() === religionName.toLowerCase())
  );
  
  const religionVideos = bhaktiVideos.filter(v => 
    v.religion.toLowerCase() === religionName.toLowerCase()
  );

  return (
    <ReligionClientPage
      religion={religion}
      religionDeities={religionDeities}
      religionBooks={religionBooks}
      religionFestivals={religionFestivals}
      religionStories={religionStories}
      religionTeachings={religionTeachings}
      religionVideos={religionVideos}
    />
  );
}