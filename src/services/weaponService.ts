async function getAllWeapons(): Promise<void> {
    const result = fetch('http://localhost:3001/weapons')
    console.log(result)
}
    
export {
    getAllWeapons
} 