function getSlice(str, start, end){
    console.log("Original String:", str);
    console.log("After Slice:", str.slice(start, end));
}

getSlice("hello world", 0, 4); //indexing starts from 0