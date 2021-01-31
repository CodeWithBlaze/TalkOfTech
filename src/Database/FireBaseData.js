import database from './Firebase';
async function getDataFromDatabase(last_article){
    return await database.collection('Articles').orderBy('createdAt').startAfter(last_article||0).limit(6)
    .get().then(data=>{
        return data.docs;
    }).catch(data=>{
        alert("error occured")
    })
}
async function getArticleFromDatabase(id){
    return await database.collection('Content').where('id','==',id).get().then(data=>{
        return data.docs;
    })
}
export {
    getDataFromDatabase,
    getArticleFromDatabase,
} ;