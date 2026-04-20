export default function TypingIndicator() {
  return (
    <div className="flex items-end gap-2.5">
      <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-xs font-bold text-black flex-shrink-0">
        AK
      </div>
      <div className="bg-[#18181b] border border-[#27272a] rounded-2xl rounded-tl-sm px-4 py-3">
        <div className="flex gap-1.5 items-center">
          <span
            className="w-2 h-2 rounded-full bg-[#52525b] animate-bounce"
            style={{ animationDelay: "0ms", animationDuration: "1s" }}
          />
          <span
            className="w-2 h-2 rounded-full bg-[#71717a] animate-bounce"
            style={{ animationDelay: "160ms", animationDuration: "1s" }}
          />
          <span
            className="w-2 h-2 rounded-full bg-[#52525b] animate-bounce"
            style={{ animationDelay: "320ms", animationDuration: "1s" }}
          />
        </div>
      </div>
    </div>
  );
}
