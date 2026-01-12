import Projeto from "@/app/programacao/projetos.entity"

export default async function getProjetos(): Promise <Projeto[]> {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"

    const data = await fetch(`${baseUrl}/projetos`, {
        cache: "no-store"
    })
    if (!data.ok){
        throw new Error(`Failed to fetch: ${data.status}`)
    }


    const projetos = await data.json()



    return projetos
}