import {config} from 'dotenv'

config();

export const PORT = process.env.PORT || 3000

export const DB_USER = process.env.DB_USER || 'p09f49vp8ui2nz4x81h7'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'pscale_pw_Hy8IExJbRqJnrscyngvjkyuzur1kTTrZIW0SktYKDAg'
export const DB_HOST = process.env.DB_HOST || 'eu-central.connect.psdb.cloud'
export const DB_DATABASE = process.env.DB_DATABASE || 'rest-api'