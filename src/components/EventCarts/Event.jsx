import Card from "./Card";
import "./Event.css";
import future from "/futureScape.jpg";
import mirage from "/neonmirage.jpg";
import pixel from "/pixel.jpg";
import gemini from "/Gemini.png";

const Event = () => 
{
    return(
        <>
        <h1 className="skill-head" id="event">Events DEVCATION 25</h1>
        {}
        
        <div className="project-container">
        <Card image={future} head="Futurescape: Visionary Tech Forecast" content="Predict the future of a tech stack in a creative blog format—news, fiction, or research-based. Explore what tech might look like in 2040 and beyond."/>
        <Card image={mirage} head="Neon Mirage: Cyberpunk AR Filter" content="Create a cyberpunk-themed AR filter with interactive elements using Lens Studio. Bring your imagination to life in augmented reality!"/>
        <Card image={pixel} head="Pixel Heaven" content="Design cozy, game-inspired pixel art scenes using tools like Pixilart or Aseprite. Think Stardew Valley vibes, perfect for Chrome wallpapers!"/>
        </div>
        <div className="project-container">
        <Card image={gemini} head="Gemini ReVamp: Code & Create" content="Use Gemini AI to generate and refine UI components, redesign the Devcation interface with Tailwind/Bootstrap, and deploy on Replit."/>
        </div>
        </>
    )
}
export default Event;

