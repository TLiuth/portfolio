import Projeto from "@/constants/projetos.entity"
import projetos from "@/constants/projetos"

export default async function getProjetos(): Promise <Projeto[]> {
    return projetos
}