import {supabase} from './supabaseClient.js'

const {data , error} = await supabase.from('notes').select('*')

if(error){
    console.log(error);
}else{
    console.log(data);
    
}



