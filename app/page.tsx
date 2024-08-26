import { TopBar, Container, Title, Filter, ProductsGroupList } from "@/components/shared/";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Pizza Menu' size='lg' className='font-extrabold' />

      </Container>

      <TopBar />

      <Container className='pb-14 mt-10'>
        <div className='flex gap-[80px]'>

          {/* Filter */}
          <div className='w-[250px]'>
            <Filter />
          </div>

          {/* Products */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList 
                title='Pizzas' 
                items={[
                  {
                    id: 1,
                    name: 'Pepperoni',
                    imageUrl: 'https://prontopizza.ua/lviv/wp-content/uploads/sites/17/2021/07/salyami-1-300x300.webp',
                    price: 15,
                    items: [{ price: 15 }]
                  },
                  {
                    id: 2,
                    name: 'Margherita',
                    imageUrl: 'https://prontopizza.ua/lviv/wp-content/uploads/sites/17/2021/07/img_0758-removebg-preview-e1719501288470-300x297.webp',
                    price: 10,
                    items: [{ price: 10 }]
                  },
                  {
                    id: 3,
                    name: 'BBQ',
                    imageUrl: 'https://prontopizza.ua/lviv/wp-content/uploads/sites/17/2021/07/kozaczka-300x300.webp',
                    price: 20,
                    items: [{ price: 20 }]
                  },
                  {
                    id: 4,
                    name: 'Hawaiian',
                    imageUrl: 'https://prontopizza.ua/lviv/wp-content/uploads/sites/17/2021/07/gavajska-300x300.webp',
                    price: 18,
                    items: [{ price: 18 }]
                  }
                ]} 
                categoryId={1} />

                <ProductsGroupList 
                title='Salads' 
                items={[
                  {
                    id: 1,
                    name: 'Pepperoni',
                    imageUrl: 'https://prontopizza.ua/lviv/wp-content/uploads/sites/17/2021/07/salyami-1-300x300.webp',
                    price: 15,
                    items: [{ price: 15 }]
                  },
                  {
                    id: 2,
                    name: 'Margherita',
                    imageUrl: 'https://prontopizza.ua/lviv/wp-content/uploads/sites/17/2021/07/img_0758-removebg-preview-e1719501288470-300x297.webp',
                    price: 10,
                    items: [{ price: 10 }]
                  },
                  {
                    id: 3,
                    name: 'BBQ',
                    imageUrl: 'https://prontopizza.ua/lviv/wp-content/uploads/sites/17/2021/07/kozaczka-300x300.webp',
                    price: 20,
                    items: [{ price: 20 }]
                  },
                  {
                    id: 4,
                    name: 'Hawaiian',
                    imageUrl: 'https://prontopizza.ua/lviv/wp-content/uploads/sites/17/2021/07/gavajska-300x300.webp',
                    price: 18,
                    items: [{ price: 18 }]
                  }
                ]} 
                categoryId={2} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
