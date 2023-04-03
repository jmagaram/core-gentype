open RescriptCore

@gentype.import("react-firebase-hooks/auth") @genType.as("useAuthState")
external useAuthState: string => (Null.t<string>, bool, option<Error.t>) = "useAuthState"
