import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';

export default function UdalostiPage() {
    const events = [
        {
          title: 'Mission Camp 2025',
          date: '15. - 25. Júl 2025',
          description: 'Letný tábor pre mladých plný dobrodružstva, duchovného rastu a spoločenstva v prírode.',
          image: 'https://placehold.co/600x400.png',
          imageHint: 'summer camp',
        },
        {
          title: 'Veľkonočné dni zdravia',
          date: '18. - 21. Apríl 2025',
          description: 'Séria prednášok a workshopov zameraných na zdravý životný štýl pre telo aj dušu.',
          image: 'https://placehold.co/600x400.png',
          imageHint: 'healthy food',
        },
      ];

  return (
    <div className="container mx-auto px-4 py-12">
        <section id="events">
            <h2 className="text-3xl font-bold text-center mb-8 font-headline">Nadchádzajúce udalosti</h2>
            <div className="grid md:grid-cols-2 gap-8">
            {events.map((event) => (
                <Card key={event.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-0">
                    <Image
                    src={event.image}
                    alt={event.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                    data-ai-hint={event.imageHint}
                    />
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                    <CardTitle className="font-headline">{event.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                    </div>
                    <CardDescription className="mt-4">{event.description}</CardDescription>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                    <Button className="w-full">Viac informácií</Button>
                </CardFooter>
                </Card>
            ))}
            </div>
        </section>
    </div>
  );
}
