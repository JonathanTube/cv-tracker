import reactLogo from '../assets/logo.jpg'

export default function Logo() {
    return (
        <div className="flex items-center space-x-4">
            <img src={reactLogo} className="w-12 h-12 pixel-button" data-eusoft-scrollable-element="1" />
            <h1 className="text-3xl">CV Tracker</h1>
        </div>
    )
}