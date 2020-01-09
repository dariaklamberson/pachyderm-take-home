// export const generateFileTree = root => {
//     return Promise.resolve(readDir(root)
//         .then(dir => {
//             const entryDataPromises = dir.entries.map(entry => {
//                 if (entry.type == 'dir') {
//                     const fullPath = `${dir.path}/${entry.name}`;
//                     // return {
//                     //     name: entry.name,
//                     //     entries: generateFileTree(fullPath),
//                     // };
//                     return generateFileTree(fullPath);
//                 } else {
//                     // in this case, we have a file (not a dir)
//                     return entry;
//                 }
//             })
//             // return Promise.all(entryDataPromises.filter(data => data.entries))
//             return Promise.all(entryDataPromises)
//         })
//     )
// }

export const readDir = directoryString => {
    const files = fetch(`files/${directoryString}`);
    return Promise.resolve(fetch(`/files/${directoryString}`)
        .then(res => res.json())
        .then(data => { return data; })
        .catch(console.log)
    );
}
