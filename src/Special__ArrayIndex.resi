@genType.ignoreInterface
type t
external make: int => t = "%identity"
let toOption: t => option<int>
let match: (t, ~found: int => 'a, ~invalid: unit => 'a) => 'a
