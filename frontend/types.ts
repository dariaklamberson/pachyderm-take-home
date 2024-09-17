interface Directory {
    path: String,
    entries: ReadonlyArray<String>,
}

interface Entry {
    name: String,
    type: 'dir' | 'file',
    size: Number,
    created: Date,
    modified: Date,
}