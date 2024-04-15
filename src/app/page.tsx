import Calender from "@/components/Cards/Calender";
import { DataTableDemo } from "@/components/Cards/DataTable";
import General from "@/components/Cards/General";
import Lines from "@/components/Cards/Lines";
import { TableDemo } from "@/components/Cards/Table";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div  className="grid gap-[32px]">
      <div className="grid lg:grid-cols-2 w-full gap-[32px]">
        <General />
        <div className="grid">
          <Calender/>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 gap-[32px] lg:h-[350px] overflow-hidden">
        <Lines/>
        <Card className="p-[16px] overflow-y-scroll">
            <CardHeader className="p-2">
              <CardTitle>Orders</CardTitle>
              <CardDescription>These are the orders of the year.</CardDescription>
            </CardHeader>
          <TableDemo/>
        </Card>
        <Card  className="p-[16px] overflow-y-scroll">
          <CardHeader className="p-2">
              <CardTitle>Users</CardTitle>
              <CardDescription>These are the users of the year.</CardDescription>
            </CardHeader>
          <DataTableDemo/>  
        </Card>
      </div>
    </div>
  );
}
