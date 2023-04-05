@genType @send external indexOf1: (array<'a>, 'a) => Special__ArrayIndex.t = "indexOf"
@genType @send external indexOf2: (array<'a>, 'a) => Special.ArrayIndex.t = "indexOf"

// GenType broken. BUT can hack around this by adding an extra
// @genType.as("ArrayIndex_t") in Special.res.
@genType
type goop1 = {x: Special.ArrayIndex.t}

// GenType works; full path to type definition
@genType
type goop2 = {x: Special__ArrayIndex.t}

// GenType works; copy full path definition to wrapper module, genType there
@genType
type goop3 = {x: Special.arrayIndex}
