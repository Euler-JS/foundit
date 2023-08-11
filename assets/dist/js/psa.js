import { Service } from '@paysuite/mpesa'
import dotenv from 'dontenv'

dotenv.config()

const API_KEY = process.env('ojdbrkw8wptmgt45pdiw17hqjnni9fee')
const PUBLIC_KEY = process.env('MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAmptSWqV7cGUUJJhUBxsMLonux24u+FoTlrb+4Kgc6092JIszmI1QUoMohaDDXSVueXx6IXwYGsjjWY32HGXj1iQhkALXfObJ4DqXn5h6E8y5/xQYNAyd5bpN5Z8r892B6toGzZQVB7qtebH4apDjmvTi5FGZVjVYxalyyQkj4uQbbRQjgCkubSi45Xl4CGtLqZztsKssWz3mcKncgTnq3DHGYYEYiKq0xIj100LGbnvNz20Sgqmw/cH+Bua4GJsWYLEqf/h/yiMgiBbxFxsnwZl0im5vXDlwKPw+QnO2fscDhxZFAwV06bgG0oEoWm9FnjMsfvwm0rUNYFlZ+TOtCEhmhtFp+Tsx9jPCuOd5h2emGdSKD8A6jtwhNa7oQ8RtLEEqwAn44orENa1ibOkxMiiiFpmmJkwgZPOG/zMCjXIrrhDWTDUOZaPx/lEQoInJoE2i43VN/HTGCCw8dKQAwg0jsEXau5ixD0GUothqvuX3B9taoeoFAIvUPEq35YulprMM7ThdKodSHvhnwKG82dCsodRwY428kg2xM/UjiTENog4B6zzZfPhMxFlOSFX4MnrqkAS+8Jamhy1GgoHkEMrsT5+/ofjCx0HjKbT5NuA2V/lmzgJLl3jIERadLzuTYnKGWxVJcGLkWXlEPYLbiaKzbJb2sYxt+Kt5OxQqC1MCAwEAAQ==')
const USER_AGENT = process.env('Euler Corp')
const ORIGIN = process.env('https://api.sandbox.vm.co.mz:18352/ipg/v1x/c2bPayment/singleStage/')
const HOST = process.env('https://api.sandbox.vm.co.mz:18352/ipg/v1x/c2bPayment/singleStage/')
const SERVICE_PROVIDER_CODE = process.env('171717')

const client = new Client({
    apiKey: API_KEY,
    publicKey: PUBLIC_KEY,
    userAgent: USER_AGENT,
    origin: ORIGIN,
    host: HOST,
    serviceProviderCode: SERVICE_PROVIDER_CODE,
    verifySSL: false,
    debugging: true,
    environment: SANDBOX
})

client
    .send({
        to: '171717',
        transaction: '12345610',
        reference: '12345660',
        amount: '100'
    })
    .then((r) => {
        console.log(r)
    })
    .catch((e) => {
        console.log(e)
    })