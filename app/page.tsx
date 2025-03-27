import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-pink-50 flex items-center justify-center">
      <div className="container-width section-padding text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-text-black">
          Programele KiloStop
        </h1>
        <p className="text-xl text-text-gray mb-12 max-w-3xl mx-auto">
          Alege programul potrivit pentru tine și începe transformarea
        </p>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link 
            href="/prediabet"
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-4 text-kilostop-pink">
              Programul Prediabet
            </h2>
            <p className="text-text-gray">
              Controleaza-ti glicemia și previne diabetul sub supravegherea specialiștilor
            </p>
          </Link>
          {/* Add more program cards here as they are developed */}
        </div>
      </div>
    </main>
  );
}