import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-br from-muted/20 to-muted/40 py-16">
        <div className="nav-container">
          <div className="text-center space-y-6">
            <Skeleton className="h-16 w-80 mx-auto rounded-full" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
        </div>
      </div>

      <div className="nav-container py-12 space-y-16">
        {/* Content Sections Skeleton */}
        {[1, 2, 3].map((section) => (
          <section key={section}>
            <div className="flex items-center space-x-2 mb-8">
              <Skeleton className="h-6 w-6" />
              <Skeleton className="h-8 w-48" />
            </div>
            <div className="content-grid">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="space-y-4 p-6 border rounded-lg">
                  <div className="space-y-2">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton className="h-6 w-16" />
                    <Skeleton className="h-6 w-20" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}