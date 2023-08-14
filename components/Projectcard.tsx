import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import WebProject from "@/components/WebProject";
import AppProject from "@/components/AppProject";
const Projectcard = () => {
  return (
    <Tabs defaultValue="web" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="web">Web Projects</TabsTrigger>
        <TabsTrigger value="app">App Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="web">
        <WebProject />
      </TabsContent>
      <TabsContent value="app">
        <AppProject />
      </TabsContent>
    </Tabs>
  );
};

export default Projectcard;
