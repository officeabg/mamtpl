

interface defaultpopovers {
    id: number
    text: string
    class: string
} 
export const Defaultpopovers:defaultpopovers[] = [
	{ id: 1, text: "Top", class: "top" },
	{ id: 2, text: "Right", class: "auto" },
	{ id: 3, text: "Bottom", class: "bottom" },
	{ id: 4, text: "Left", class: "left" },
];
interface colorheader {
    id: number
    text: string
    class: string
    color: string
    color1: string
    color2: string
} 
export const Colorheaderpopovers:colorheader[]= [
	{ id: 1, text: "Primary", class: "top", color: "outline-primary", color1: "primary", color2:"" },
	{ id: 2, text: "Secondary", class: "right", color: "outline-secondary", color1: "secondary", color2:"" },
	{ id: 3, text: "Info", class: "bottom", color: "outline-info", color1: "info", color2:"bs-popover-auto" },
	{ id: 4, text: "Warning", class: "left", color: "outline-warning", color1: "warning", color2:"" },
	{ id: 4, text: "Success", class: "top", color: "outline-success", color1: "success", color2:"" },
	{ id: 4, text: "Danger", class: "top", color: "outline-danger", color1: "danger", color2:"" },
];
interface colorpopovers {
    id: number
    text: string
    class: string
    color1: string
} 
export const Colredpopovers:colorpopovers[] = [
	{ id: 1, text: "Primary", class: "top", color1: "primary" },
	{ id: 2, text: "Secondary", class: "right", color1: "secondary" },
	{ id: 3, text: "Info", class: "bottom", color1: "info" },
	{ id: 4, text: "Warning", class: "left", color1: "warning" },
	{ id: 4, text: "Success", class: "top", color1: "success" },
	{ id: 4, text: "Danger", class: "right", color1: "danger" },
	{ id: 4, text: "Teal", class: "bottom", color1: "teal" },
	{ id: 4, text: "Purple", class: "left", color1: "purple" },
];
interface dismiss {
    id: number
    color: string
    class: string
} 
export const Dismissiblepopovers :dismiss[]= [
	{ id: 1, color: "primary", class: "top" },
	{ id: 2, color: "secondary", class: "right" },
	{ id: 3, color: "info", class: "bottom" },
	{ id: 4, color: "warning", class: "auto" },
];
  
