import type { RangeInFileWithContents } from "../commands/util.js";
import type { ContextSubmenuItem } from "../index.js";
import { ToIdeFromWebviewOrCoreProtocol } from "./ide.js";
import { ToWebviewFromIdeOrCoreProtocol } from "./webview.js";

export type ToIdeFromWebviewProtocol = ToIdeFromWebviewOrCoreProtocol & {
  onLoad: [
    undefined,
    {
      windowId: string;
      serverUrl: string;
      workspacePaths: string[];
      vscMachineId: string;
      vscMediaUrl: string;
    },
  ];
  openUrl: [string, void];
  applyToCurrentFile: [{ text: string }, void];
  createFile: [{ path: string}, void];
  showTutorial: [undefined, void];
  showFile: [{ filepath: string }, void];
  openConfigJson: [undefined, void];
  aiderMode: [undefined, void];
  aiderCtrlC: [undefined, void];
  aiderResetSession: [undefined, void];
  toggleDevTools: [undefined, void];
  reloadWindow: [undefined, void];
  focusEditor: [undefined, void];
  toggleFullScreen: [undefined, void];
  insertAtCursor: [{ text: string }, void];
  copyText: [{ text: string }, void];
  "jetbrains/editorInsetHeight": [{ height: number }, void];
  setGitHubAuthToken: [{ token: string }, void];
  // for shortcuts bar
  bigChat: [undefined, void];
  lastChat: [undefined, void];
  closeChat: [undefined, void];
  openHistory: [undefined, void];
  appendSelected: [undefined, void];
  pearaiLogin: [undefined, void];
};

export type ToWebviewFromIdeProtocol = ToWebviewFromIdeOrCoreProtocol & {
  setInactive: [undefined, void];
  submitMessage: [{ message: any }, void]; // any -> JSONContent from TipTap
  updateSubmenuItems: [
    { provider: string; submenuItems: ContextSubmenuItem[] },
    void,
  ];
  newSessionWithPrompt: [{ prompt: string }, void];
  userInput: [{ input: string }, void];
  focusContinueInput: [undefined, void];
  focusContinueInputWithoutClear: [undefined, void];
  focusContinueInputWithNewSession: [undefined, void];
  highlightedCode: [
    {
      rangeInFileWithContents: RangeInFileWithContents;
      prompt?: string;
      shouldRun?: boolean;
    },
    void,
  ];
  addModel: [undefined, void];
  openSettings: [undefined, void];
  viewHistory: [undefined, void];
  newSession: [undefined, void];
  setTheme: [{ theme: any }, void];
  setThemeType: [{ themeType: string }, void];
  setColors: [{ [key: string]: string }, void];
  "jetbrains/editorInsetRefresh": [undefined, void];
  addApiKey: [undefined, void];
  setupLocalModel: [undefined, void];
  incrementFtc: [undefined, void];
  openOnboarding: [undefined, void];
};
