import { BriefcaseBusiness, GalleryVerticalEnd, User } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function CardProps({ title, description, icon }: CardProps) {
  return (
    <section className="space-y-5">
      <div className="flex items-center px-4 py-4 bg-surface-panel rounded-md gap-4 border border-border-card">
        <div className="relative">
          <div className="absolute inset-0 bg-primary-blue opacity-30 blur-md z-0 animate-pulse" />
          <div className="relative bg-surface-icon p-2 rounded-full text-secondary-purple z-10 ">
            {icon}
          </div>
        </div>
        <div>
          <h3 className="font-bold text-md mb-1 md:text-xl">{title}</h3>
          <p className="text-description text-[12px] md:text-[14px]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export function SectionCards() {
  return (
    <div className="space-y-5">
      <CardProps
        icon={<User />}
        title="Networking Premium"
        description="Conecte-se com lideres de grandes empresas de tecnologia."
      />
      <CardProps
        icon={<GalleryVerticalEnd />}
        title="Conteúdo Exclusivo"
        description="Workshops e palestras com os principais inovadores do
mercado."
      />
    <CardProps
        icon={<BriefcaseBusiness />}
        title="Oportunidades de Carreira"
        description="Recrute ou seja recrutado por empresas de tecnologia."
      />
    </div>
  );
}
