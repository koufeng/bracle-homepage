
export type PageBaseEntity = {
    size: number
    current: number
    pages: number
    total: number
}

export type PagesEntity<T> = {
    pages: number
    total: number
    size: number
    current: number
    records: T
}

export type PriceRequest = {
    id: string
    chainId: string
    chainName: string
    baseAsset:	string
    quoteAsset:	string
    proxyContractAddress: string
    aggregatorContractAddress: string
    heartbeat: string
    minNumOracles: string
    maxNumOracles: string
    assetType: string
    lastPrice: string
    lastUpdate: number
    confidence: string
    oneHour: string
    twentyFourHour: string
    sevenDay: string
    priceList: number []
}

export interface Origin {
    [originID: string]: string
}
