import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "entrada",
    question: "¿Qué incluye la entrada?",
    answer:
      "Incluye 1 bebida a elección (cerveza, fernet, vino, gaseosa o agua) y acceso completo al evento con todos los shows en vivo, competencias y actividades gastronómicas.",
  },
  {
    id: "lluvia",
    question: "¿El evento se suspende por lluvia?",
    answer:
      "Se comunica por redes oficiales el mismo día. Buscamos mantener la fecha siempre que sea posible. En caso de suspensión, las entradas son válidas para la nueva fecha.",
  },
  {
    id: "horarios",
    question: "¿Cuáles son los horarios del evento?",
    answer:
      "El evento comienza a las 09:00 y finaliza a las 19:00 aproximadamente. Los shows en vivo se desarrollan durante toda la jornada con horarios específicos que se anuncian el día del evento.",
  },
  {
    id: "comida",
    question: "¿Hay comida disponible en el evento?",
    answer:
      "Sí, además de la competencia de asadores, habrá puestos gastronómicos con opciones variadas. También podrás degustar las preparaciones de los competidores.",
  },
  {
    id: "estacionamiento",
    question: "¿Hay estacionamiento disponible?",
    answer:
      "El Catalinas Club cuenta con estacionamiento limitado. Recomendamos llegar temprano o utilizar transporte público. También hay estacionamientos pagos en la zona.",
  },
  {
    id: "menores",
    question: "¿Pueden ingresar menores de edad?",
    answer:
      "Sí, es un evento familiar. Los menores de 10 años ingresan sin costo acompañados de un adulto con entrada.",
  },
];

interface FAQAccordionProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQAccordion({ item, isOpen, onToggle }: FAQAccordionProps) {
  return (
    <div className='rounded-xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-all duration-300'>
      <button
        onClick={onToggle}
        className='w-full text-left p-4 focus:outline-none focus:ring-2 focus:ring-[--color-primary]/50 focus:ring-offset-2 rounded-xl'
        aria-expanded={isOpen}
        aria-controls={`faq-content-${item.id}`}
      >
        <div className='flex items-center justify-between'>
          <span className='font-ui font-semibold text-[--color-ink] pr-4'>
            {item.question}
          </span>
          <svg
            className={`flex-shrink-0 w-5 h-5 text-[--color-primary] transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
      </button>

      <div
        id={`faq-content-${item.id}`}
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className='px-4 pb-4'>
          <div
            className={`text-[--color-ink]/80 leading-relaxed transform transition-all duration-300 ${
              isOpen ? "translate-y-0" : "-translate-y-2"
            }`}
          >
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id='faq' data-section className='section scroll-mt-20'>
      <div className='container text-center'>
        <h2 className='section-title'>Preguntas frecuentes</h2>
        <p className='mt-2 text-[--color-ink]/70'>
          Resolvé todas tus dudas sobre la Olimpiada de Asadores
        </p>

        <div className='mt-8 max-w-3xl mx-auto text-left space-y-3'>
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className='animate-fade-in-up'
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <FAQAccordion
                item={item}
                isOpen={openItems.has(item.id)}
                onToggle={() => toggleItem(item.id)}
              />
            </div>
          ))}
        </div>

        <div className='mt-8 p-4 bg-[--color-primary]/10 rounded-xl border border-[--color-primary]/20'>
          <p className='text-sm text-[--color-ink]/80'>
            ¿Tenés otra pregunta? Escribinos por{" "}
            <a
              href='https://api.whatsapp.com/send?phone=542355642309'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[--color-primary] hover:underline font-medium'
            >
              WhatsApp
            </a>{" "}
            o seguinos en{" "}
            <a
              href='https://www.instagram.com/olimpiadadeasadores/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[--color-primary] hover:underline font-medium'
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
