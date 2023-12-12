async function sayhello(){
    const promise=await fetch(`https://randomuser.me/api/`)
    return promise.json();
}
export default sayhello;