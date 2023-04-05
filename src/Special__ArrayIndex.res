@genType
type t = int
external make: int => t = "%identity"
let toOption = n => n >= 0 ? Some(n) : None
let match = (t, ~found, ~invalid) => t >= 0 ? found(t) : invalid()
