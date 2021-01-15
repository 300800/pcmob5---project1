// Action Types
const TOGGLE_DARKMODE = "toggle_darkmode"

//Actions

export function toggleDarkMode() {
    return {
        type:  TOGGLE_DARKMODE,
     
    };
}

//sTATE
const initialState = {
    darkMode: false
}

// Reducer
export default function accountPrefsReducer(state = initialState, action) {
    switch (action.type)
}