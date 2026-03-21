// Supabase config file
import { createClient } from '@supabase/supabase-js'
import 'dotenv/config';
import fs from 'fs';

const URL: any = process.env.SUPABASE_PROJECT_URL;
const API_Key: any = process.env.SUPABASE_API_KEY;

export const supabase = createClient(URL, API_Key)

export async function UploadFile(file: any) {

    const fileBuffer = fs.readFileSync(file.path);

    const { data, error } = await supabase.storage.from('File Uploader Storage')
        .upload(file.path, fileBuffer, {
            contentType: file.mimetype
        });
    if (error) {
        throw error;
    }
}