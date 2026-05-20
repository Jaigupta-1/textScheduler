<!-- Shadcn Install -->

npx shadcn@latest init

Sabse Important Part:
Abhi tumhare project me:
components/ui
folder ban jayega.

<!-- How to make card -->

Ab Component Add Kaise Kare

Example:

Card install
npx shadcn@latest add card

Kya Hoga?

Automatically:

components/ui/card.jsx

create ho jayega.

Ab Use kaise kare?
import { Card, CardContent } from "@/components/ui/card";

function App() {
return (
<Card>
<CardContent>
Hello
</CardContent>
</Card>
);
}

export default App;

<!-- Sidebar Kaise Add Kare?-->

npx shadcn@latest add sidebar

<!-- Tumhare Dashboard Ke Liye -->

Ye install karo:
npx shadcn@latest add sidebar
npx shadcn@latest add card
npx shadcn@latest add table
npx shadcn@latest add dialog
npx shadcn@latest add dropdown-menu
npx shadcn@latest add sheet
npx shadcn@latest add tabs
