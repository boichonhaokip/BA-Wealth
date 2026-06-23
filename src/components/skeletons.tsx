export function StatSkeleton() {
  return (
    <div className="surface-card p-6">
      <div className="h-9 w-28 rounded-md shimmer" />
      <div className="mt-3 h-4 w-36 rounded-md shimmer" />
    </div>
  );
}

export function ServiceSkeleton() {
  return (
    <div className="surface-card p-6">
      <div className="h-12 w-12 rounded-xl shimmer" />
      <div className="mt-5 h-5 w-32 rounded-md shimmer" />
      <div className="mt-3 h-3.5 w-full rounded-md shimmer" />
      <div className="mt-2 h-3.5 w-3/4 rounded-md shimmer" />
    </div>
  );
}

export function TestimonialSkeleton() {
  return (
    <div className="surface-card p-7">
      <div className="flex justify-between">
        <div className="h-7 w-7 rounded-md shimmer" />
        <div className="h-4 w-20 rounded-md shimmer" />
      </div>
      <div className="mt-5 space-y-2">
        <div className="h-3.5 w-full rounded-md shimmer" />
        <div className="h-3.5 w-11/12 rounded-md shimmer" />
        <div className="h-3.5 w-2/3 rounded-md shimmer" />
      </div>
      <div className="mt-6 pt-5 border-t border-border flex justify-between">
        <div className="h-8 w-32 rounded-md shimmer" />
        <div className="h-8 w-20 rounded-md shimmer" />
      </div>
    </div>
  );
}

export function ContactBlockSkeleton() {
  return (
    <div className="surface-card p-5 flex items-center gap-4">
      <div className="h-11 w-11 rounded-lg shimmer" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-24 rounded-md shimmer" />
        <div className="h-3.5 w-40 rounded-md shimmer" />
      </div>
    </div>
  );
}