import { TopBar, Container, Title, Filter, ProductCard } from "@/components/shared/";
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
        <div className='flex gap-[60px]'>

          {/* Filter */}
          <div className='w-[250px]'>
            <Filter />
          </div>

          {/* Products */}
          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
