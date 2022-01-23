export type Server = {
    readonly id: string
    server_id: string
    locale: string
    prefix: string[]

    shortlinks: boolean
    sourcefinder: boolean
    embeds: boolean
    interaction_text: boolean

}

export type Usage = {
    readonly id: string
    name: string,
    type: string
    amount: number
}

export type Features =
    | "shortlinks"
    | "shortlink"
    | "sl"


    | "sauce"
    | "source"
    | "sourcefinder"
    | "sf"

    | "embeds"
    | "embedimages"

    | "rp"
    | "interactiontext"