import Header from "./header";
import CalendarBlock from "./main_section";

export default function Home() {
  return (
    <div className="items-center min-h-screen flex flex-col">
      <Header />
      <div className="px-[100px] w-full">
        <CalendarBlock />
      </div>
      {/* <EventInfo /> */}
      {/* <Footer /> */}
    </div>
  );
}
