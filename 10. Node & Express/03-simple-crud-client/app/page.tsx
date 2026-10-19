import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page() {
  return (
    <div className="flex min-h-svh p-6">
      <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
        <div>
          <Link href="/users">   
            <Button>Check Users</Button>
          </Link>
        </div>
      </div>
    </div>

  )
}
