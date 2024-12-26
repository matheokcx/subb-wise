export default function Abonnement({ e }: { e: any }) {
    return (
        <div className="w-1/6 px-8 py-4 flex flex-col gap-4 justify-center border-2 border-gray-400 rounded-xl">
            <img src={"/" + e.image} alt="Illustration de l'abonnement" />
            <h2 className='text-xl font-bold'>{e.nom}</h2>
            <p>${e.mensualite} | {e.categorie}</p>
        </div>
    )
}