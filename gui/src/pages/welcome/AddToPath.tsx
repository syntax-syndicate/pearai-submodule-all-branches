'use client'

import { Button } from "@/components/ui/button";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function AddToPath({ onBack, onNext }: { onBack: () => void, onNext: () => void }) {
  return (
    <div className="flex w-full overflow-hidden bg-background text-foreground">
      <div className="w-full flex flex-col h-screen">
        <div
          onClick={onBack}
          className="absolute top-4 left-4 md:top-6 md:left-6 lg:top-8 lg:left-8 flex items-center gap-2 text-[var(--vscode-descriptionForeground)] hover:text-[var(--vscode-foreground)] cursor-pointer transition-colors group"
        >
          <ArrowLongRightIcon className="w-4 h-4 rotate-180" />
          <span className="text-sm">Back</span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 lg:p-10">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Add Pear to PATH
          </h2>

          <p className="text-muted-foreground text-sm md:text-base mb-12">
            Access Pear directly from your terminal
          </p>

          <div className="w-full max-w-2xl mb-12 rounded-lg overflow-hidden border border-solid border-input shadow-sm">
            <div className="bg-input p-2 border-b border-input flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[var(--vscode-terminal-ansiRed)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--vscode-terminal-ansiYellow)]"></div>
                <div className="w-3 h-3 rounded-full bg-[var(--vscode-terminal-ansiGreen)]"></div>
              </div>
              <span className="text-xs text-muted-foreground">Terminal</span>
            </div>

            <div className="bg-[var(--vscode-terminal-background)] p-4 border border-input m-1 rounded-sm">
              <div className="font-mono text-sm">
                <span className="text-[var(--vscode-terminal-foreground)]">$ cd /path/to/your/project</span>
              </div>
              <div className="font-mono text-sm mt-2 flex items-center">
                <span className="text-[var(--vscode-terminal-foreground)]">$&nbsp;</span>
                <span className="text-[var(--vscode-terminal-ansiCyan)]">pear .</span>
                <span className="ml-1 animate-pulse">▋</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button
              className="w-[200px] text-button-foreground bg-button hover:bg-button-hover p-4 md:p-5 lg:p-6 text-sm md:text-base cursor-pointer"
              onClick={onNext}
            >
              Add to PATH
            </Button>

            <div
              onClick={onNext}
              className="text-sm text-[var(--vscode-descriptionForeground)] hover:text-[var(--vscode-foreground)] underline cursor-pointer transition-colors"
            >
              Skip adding to PATH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
