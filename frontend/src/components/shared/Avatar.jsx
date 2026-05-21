import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

export function AvatarDemo({ img, className }) {
    return (
        <Avatar>
            <AvatarImage
                src={img}
                alt="@shadcn"
                className={className}
            />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    )
}
