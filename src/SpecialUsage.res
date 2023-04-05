@genType @send external indexOf1: (array<'a>, 'a) => Special__ArrayIndex.t = "indexOf"
@genType @send external indexOf2: (array<'a>, 'a) => Special.ArrayIndex.t = "indexOf"

// GenType broken; refers to "./Special.gen"
@genType
type goop1 = {x: Special.ArrayIndex.t}

// GenType works
@genType
type goop2 = {x: Special__ArrayIndex.t}
