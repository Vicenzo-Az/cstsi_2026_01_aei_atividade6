import { motion } from "framer-motion";
import { BarChart3, ShieldCheck, Sparkles, Upload } from "lucide-react";

const motionItems = [
  {
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon: BarChart3,
  },
  {
    title: "Sed do eiusmod",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna.",
    icon: Upload,
  },
  {
    title: "Ut enim ad minim",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    icon: ShieldCheck,
  },
  {
    title: "Nisi ut aliquip",
    description: "Nisi ut aliquip ex ea commodo consequat duis aute irure.",
    icon: Sparkles,
  },
];

export function LandingMotionStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {motionItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ y: -4 }}
            className="group rounded-[1.4rem] border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/10 backdrop-blur-md"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-300 transition-transform duration-300 group-hover:scale-105">
                <Icon size={20} />
              </div>

              <div className="space-y-2">
                <h3 className="text-base font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm leading-6 text-white/65">
                  {item.description}
                </p>
              </div>
            </div>

            <motion.div
              animate={{ opacity: [0.45, 0.95, 0.45] }}
              transition={{
                duration: 3.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="mt-4 h-1 rounded-full bg-gradient-to-r from-emerald-400 via-emerald-200 to-transparent"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
