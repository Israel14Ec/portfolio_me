export type CardProjectT = {
    id: number
    img: string 
    title: string
    description: string
    technologies?: string []
    link?: string
    gitHubLink?: { 
        link: string
        title: string
    }[],
    linkDownload?: string

    
}
