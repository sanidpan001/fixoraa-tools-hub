import type { LucideIcon } from "lucide-react";
import { BrainCircuit, FileText, Image, Sparkles, Type, Video } from "lucide-react";

export type Tool = { name: string; slug: string; icon: string; description: string };
export type Category = { id: string; name: string; icon: LucideIcon; color: string; count: number; description: string; preview: string; tools: Tool[] };

const makeTools = (items: [string, string, string][], icon: string): Tool[] =>
  items.map(([name, slug, description]) => ({ name, slug, description, icon }));

// ==================== HOW TO ADD NEW CATEGORY ====================
// Nayi category add karne ke liye neeche jaisa object categories array mein copy karein:
// { id: "audio-tools", name: "Audio Tools", icon: Music, color: "orange", count: 12,
// description: "Edit and convert audio files", preview: "MP3 Cutter, Joiner...", tools: [
// { name: "MP3 Cutter", slug: "mp3-cutter", icon: "Scissors", description: "Cut MP3 files" },
// ] }
// Save karte hi nayi category directory mein dikhne lagegi.
// ==================== HOW TO ADD NEW TOOL ====================
// 1. Existing category dhoondhein. 2. tools array mein object add karein — YAHAN NAYA TOOL ADD KARO.
// 3. Slug subdomain se match hona chahiye: "my-tool" → https://my-tool.fixoraa.tech
// 4. count ko bhi update karein. Icons: Image, FileText, Video, Music, Type, Wand, Scissors, Sparkles.

export const categories: Category[] = [
  {
    id: "image-tools", name: "Image Tools", icon: Image, color: "orange", count: 25,
    description: "Polish, convert, and transform every pixel.", preview: "BG Remover, Compressor, Resizer...",
    tools: makeTools([
      ["Background Remover","bg-remover","Remove image backgrounds instantly"],["Image Compressor","image-compressor","Shrink images without losing quality"],["Image Resizer","image-resizer","Resize images to exact dimensions"],["Image Converter","image-converter","Convert between image formats"],["Image Cropper","image-cropper","Crop images with precision"],["Photo Enhancer","photo-enhancer","Improve clarity and color"],["Image to Text","image-to-text","Extract text from pictures"],["JPG to PNG","jpg-to-png","Convert JPG files to PNG"],["PNG to JPG","png-to-jpg","Convert PNG files to JPG"],["WebP Converter","webp-converter","Convert images to and from WebP"],["Image Rotator","image-rotator","Rotate and flip any image"],["Watermark Remover","watermark-remover","Clean unwanted marks from images"],["Watermark Maker","watermark-maker","Add a custom watermark"],["Passport Photo Maker","passport-photo-maker","Create compliant passport photos"],["Profile Picture Maker","profile-picture-maker","Create polished profile pictures"],["Image Colorizer","image-colorizer","Colorize black and white photos"],["Blur Image","blur-image","Apply a smooth blur effect"],["Pixelate Image","pixelate-image","Create a pixelated image effect"],["Meme Generator","meme-generator","Make shareable memes quickly"],["QR Code Generator","qr-code-generator","Turn links into QR codes"],["Color Picker","image-color-picker","Pick colors from any image"],["EXIF Remover","exif-remover","Remove private photo metadata"],["Collage Maker","collage-maker","Combine photos in a collage"],["Favicon Generator","favicon-generator","Create website favicons"],["SVG Optimizer","svg-optimizer","Clean and compress SVG files"]], "Image"),
  },
  {
    id: "pdf-tools", name: "PDF Tools", icon: FileText, color: "green", count: 30,
    description: "Organize, convert, and protect documents.", preview: "Merger, Splitter, Compressor...",
    tools: makeTools([
      ["PDF Merger","pdf-merger","Combine multiple PDF files"],["PDF Splitter","pdf-splitter","Separate PDF pages"],["PDF Compressor","pdf-compressor","Reduce PDF file size"],["PDF to Word","pdf-to-word","Convert PDF documents to Word"],["Word to PDF","word-to-pdf","Turn Word files into PDF"],["PDF to JPG","pdf-to-jpg","Convert PDF pages to images"],["JPG to PDF","jpg-to-pdf","Combine JPG images into PDF"],["PDF to PNG","pdf-to-png","Export PDF pages as PNG"],["Excel to PDF","excel-to-pdf","Convert spreadsheets to PDF"],["PDF to Excel","pdf-to-excel","Extract PDF tables to Excel"],["PowerPoint to PDF","powerpoint-to-pdf","Convert slides into PDF"],["PDF to PowerPoint","pdf-to-powerpoint","Turn PDFs into presentations"],["Unlock PDF","unlock-pdf","Remove PDF password protection"],["Protect PDF","protect-pdf","Secure a PDF with a password"],["Rotate PDF","rotate-pdf","Rotate selected PDF pages"],["Delete PDF Pages","delete-pdf-pages","Remove pages from a PDF"],["Reorder PDF Pages","reorder-pdf-pages","Rearrange pages with ease"],["Add Page Numbers","add-pdf-page-numbers","Number every PDF page"],["Add Watermark to PDF","pdf-watermark","Add text or image watermarks"],["Sign PDF","sign-pdf","Add your signature to PDFs"],["Edit PDF","edit-pdf","Add text and shapes to PDFs"],["OCR PDF","ocr-pdf","Make scanned PDFs searchable"],["Scan to PDF","scan-to-pdf","Create PDFs from scans"],["HTML to PDF","html-to-pdf","Save a web page as PDF"],["PDF to HTML","pdf-to-html","Convert PDFs into HTML"],["PDF Reader","pdf-reader","Read PDFs in your browser"],["PDF Metadata Editor","pdf-metadata-editor","Edit PDF author and title data"],["Repair PDF","repair-pdf","Recover a damaged PDF file"],["Compare PDFs","compare-pdfs","Find differences between PDFs"],["Grayscale PDF","grayscale-pdf","Convert PDF colors to grayscale"]], "FileText"),
  },
  {
    id: "text-tools", name: "Text Tools", icon: Type, color: "gold", count: 20,
    description: "Write cleaner, count faster, and format better.", preview: "Word Counter, Case Converter...",
    tools: makeTools([
      ["Word Counter","word-counter","Count words and characters"],["Case Converter","case-converter","Switch between letter cases"],["Text to Speech","text-to-speech","Listen to written text"],["Plagiarism Checker","plagiarism-checker","Check writing for originality"],["Grammar Checker","grammar-checker","Fix grammar and punctuation"],["Character Counter","character-counter","Count every character"],["Lorem Ipsum Generator","lorem-ipsum-generator","Generate placeholder copy"],["Text Reverser","text-reverser","Reverse any block of text"],["Duplicate Line Remover","duplicate-line-remover","Remove repeated lines"],["Text Sorter","text-sorter","Sort lines alphabetically"],["Whitespace Remover","whitespace-remover","Clean extra spaces and lines"],["Slug Generator","slug-generator","Create clean URL slugs"],["Markdown Previewer","markdown-previewer","Preview Markdown as you type"],["JSON Formatter","json-formatter","Format and validate JSON"],["XML Formatter","xml-formatter","Beautify XML markup"],["Base64 Encoder","base64-encoder","Encode text into Base64"],["Base64 Decoder","base64-decoder","Decode Base64 text"],["URL Encoder","url-encoder","Encode text for safe URLs"],["Random Text Generator","random-text-generator","Generate useful sample text"],["Reading Time Calculator","reading-time-calculator","Estimate content reading time"]], "Type"),
  },
  {
    id: "video-tools", name: "Video Tools", icon: Video, color: "orange", count: 15,
    description: "Trim, convert, and share video with ease.", preview: "Compressor, Trimmer, MP3...",
    tools: makeTools([
      ["Video Compressor","video-compressor","Reduce video file size"],["Video Trimmer","video-trimmer","Cut videos to the right length"],["Video to MP3","video-to-mp3","Extract audio from video"],["Video to GIF","video-to-gif","Create animated GIFs"],["Video Converter","video-converter","Convert common video formats"],["Video Cropper","video-cropper","Crop the video frame"],["Video Resizer","video-resizer","Resize for any platform"],["Mute Video","mute-video","Remove sound from videos"],["Add Audio to Video","add-audio-to-video","Pair audio with your video"],["Change Video Speed","change-video-speed","Speed up or slow down clips"],["Rotate Video","rotate-video","Rotate and flip video"],["Loop Video","loop-video","Create a seamless video loop"],["Video Thumbnail Maker","video-thumbnail-maker","Create a strong cover image"],["Subtitle Generator","subtitle-generator","Create automatic subtitles"],["Screen Recorder","screen-recorder","Record your screen privately"]], "Video"),
  },
  {
    id: "ai-tools", name: "AI Tools", icon: BrainCircuit, color: "green", count: 10,
    description: "Smart shortcuts for ideas and everyday work.", preview: "AI Writer, Image Generator...",
    tools: makeTools([
      ["AI Writer","ai-writer","Draft clear content in seconds"],["AI Image Generator","ai-image-generator","Turn ideas into original images"],["AI Background Remover","ai-background-remover","Remove backgrounds intelligently"],["AI Summarizer","ai-summarizer","Summarize long content"],["AI Paraphraser","ai-paraphraser","Rewrite text naturally"],["AI Email Writer","ai-email-writer","Draft useful emails quickly"],["AI Code Explainer","ai-code-explainer","Understand complex code"],["AI Caption Generator","ai-caption-generator","Create social captions"],["AI Resume Builder","ai-resume-builder","Build a focused resume"],["AI Prompt Generator","ai-prompt-generator","Create stronger AI prompts"]], "Sparkles"),
  },
];

export const allTools = categories.flatMap((category) => category.tools).sort((a, b) => a.name.localeCompare(b.name));
export const totalTools = allTools.length;
export const fallbackToolIcon = Sparkles;
