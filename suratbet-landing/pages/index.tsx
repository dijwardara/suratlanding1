
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Coins, Dice3, Cards, SlotMachine, CarFront } from "lucide-react";

export default function SuratBetLanding() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#011c3a] to-[#012c5d] text-white p-8">
      <section className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold tracking-tight"
        >
          SüratBet
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl mt-4"
        >
          Hızlı oyun, hızlı kazanç
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-8"
        >
          <Button className="text-lg px-8 py-4 rounded-2xl shadow-lg bg-blue-600 hover:bg-blue-700">
            Hemen Başla
          </Button>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-[#022a4d] border border-blue-800 rounded-2xl shadow-2xl text-center">
            <CardContent className="p-6 text-lg flex flex-col items-center">
              <SlotMachine className="w-10 h-10 mb-4" />
              Slot Makineleri ile Kazanma Şansı
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <Card className="bg-[#022a4d] border border-blue-800 rounded-2xl shadow-2xl text-center">
            <CardContent className="p-6 text-lg flex flex-col items-center">
              <Dice3 className="w-10 h-10 mb-4" />
              Zar Oyunlarıyla Eğlence ve Adrenalin
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Card className="bg-[#022a4d] border border-blue-800 rounded-2xl shadow-2xl text-center">
            <CardContent className="p-6 text-lg flex flex-col items-center">
              <Cards className="w-10 h-10 mb-4" />
              İskambil Kartlarıyla Stratejik Oyunlar
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          <Card className="bg-[#022a4d] border border-blue-800 rounded-2xl shadow-2xl text-center">
            <CardContent className="p-6 text-lg flex flex-col items-center">
              <Coins className="w-10 h-10 mb-4" />
              Anında Para Kazanma İmkânı
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-[#011f3f] border border-blue-900 rounded-2xl shadow-2xl text-center">
            <CardContent className="p-6 text-lg flex flex-col items-center">
              <CarFront className="w-12 h-12 mb-4" />
              Dijital Casino Deneyimi ve VIP Ayrıcalıklar
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </main>
  );
}
