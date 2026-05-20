import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "./card";
export function CardBar() {
  return (
    <div className="p-10">
      <Card className="w-[600px] overflow-hidden">
        <div className="flex">
          {/* LEFT IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
            alt="nature"
            className="w-[200px] h-[200px] object-cover"
          />

          {/* RIGHT CONTENT */}
          <CardContent className="flex flex-col justify-center gap-3 p-5">
            <h1 className="text-2xl font-bold">Nature Card</h1>

            <p className="text-muted-foreground">
              Beautiful nature landscape image.
            </p>

            <button className="bg-black text-white px-4 py-2 rounded-md w-fit">
              Explore
            </button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
