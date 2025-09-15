import React, { useState, useRef, useEffect } from "react";

// 表情数据接口
interface EmojiReaction {
  emoji: string;
  label: string;
  count: number;
  isActive: boolean;
  defaultShow?: boolean;
}

// 表情按钮组件
const EmojiButton: React.FC<{
  emoji: string;
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}> = ({ emoji, label, count, isActive, onClick }) => {
  return (
    <button
      aria-label={`表示 ${label}${count > 0 ? ` (${count})` : ""}`}
      type="button"
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 transition-all duration-200 hover:scale-105 ${
        isActive
          ? "bg-skin-accent/20 border-skin-accent text-skin-accent"
          : "bg-skin-fill border-skin-line"
      }`}
      onClick={onClick}
    >
      <span className="text-xs">{emoji}</span>
      {count > 0 && (
        <span className="text-center text-xs font-medium">{count}</span>
      )}
    </button>
  );
};

// 主要的表情反应组件
const EmojiReactions: React.FC<{ id: string }> = ({ id }) => {
  const [hoveredEmoji, setHoveredEmoji] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState<"left" | "center" | "right">(
    "center"
  );
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [emojiReactions, setEmojiReactions] = useState<EmojiReaction[]>([
    { emoji: "👍", label: "+1", count: 0, isActive: false, defaultShow: true },
    { emoji: "👎", label: "-1", count: 0, isActive: false, defaultShow: true },
    { emoji: "🎉", label: "好耶", count: 0, isActive: false },
    { emoji: "😄", label: "大笑", count: 0, isActive: false },
    { emoji: "😕", label: "困惑", count: 0, isActive: false },
    { emoji: "❤️", label: "爱了", count: 0, isActive: false },
    { emoji: "🚀", label: "太快啦", count: 0, isActive: false },
    { emoji: "👀", label: "围观", count: 0, isActive: false },
  ]);

  // 监听点击外部区域事件
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // 处理表情点击
  const handleEmojiClick = (index: number) => {
    setEmojiReactions(prev =>
      prev.map((reaction, i) => {
        if (i === index) {
          const newIsActive = !reaction.isActive;
          return {
            ...reaction,
            isActive: newIsActive,
            count: newIsActive
              ? reaction.count + 1
              : Math.max(0, reaction.count - 1),
          };
        }
        return reaction;
      })
    );
    // 点击表情后关闭菜单
    setIsMenuOpen(false);
  };

  // 切换菜单显示状态
  const toggleMenu = () => {
    if (!isMenuOpen && buttonRef.current) {
      // 检测按钮位置来决定菜单显示方向
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const buttonCenterX = buttonRect.left + buttonRect.width / 2;

      // 根据按钮位置决定菜单显示方向
      if (buttonCenterX < windowWidth * 0.2) {
        setMenuPosition("left");
      } else if (buttonCenterX > windowWidth * 0.8) {
        setMenuPosition("right");
      } else {
        setMenuPosition("center");
      }
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id={id} className="emoji-reactions border-skin-line/30 mt-4">
      <div className="flex flex-wrap items-center gap-2">
        {/* 已激活的表情反应显示 */}
        {emojiReactions
          .filter(reaction => reaction.isActive || reaction.defaultShow)
          .map(reaction => (
            <EmojiButton
              key={reaction.emoji}
              emoji={reaction.emoji}
              label={reaction.label}
              count={reaction.count}
              isActive={reaction.isActive}
              onClick={() => handleEmojiClick(emojiReactions.indexOf(reaction))}
            />
          ))}

        {/* GitHub风格的表情反应菜单 */}
        <div className="relative leading-[0]" ref={menuRef}>
          <button
            ref={buttonRef}
            aria-label="添加回应"
            className="link-secondary border-skin-line hover:bg-skin-fill inline-flex cursor-pointer items-center gap-1 rounded-full border px-1 py-1 transition-all duration-200"
            onClick={toggleMenu}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              viewBox="0 0 16 16"
              width="16"
              height="16"
              fill="currentColor"
              className="octicon octicon-smiley"
              style={{ verticalAlign: "text-bottom" }}
            >
              <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm3.82 1.636a.75.75 0 0 1 1.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 0 1 1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002-.002.003-.005.007-.014.019a2.066 2.066 0 0 1-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.331 3.331 0 0 1-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 0 1 .183-1.044ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm5.25 2.25.592.416a97.71 97.71 0 0 0-.592-.416Z"></path>
            </svg>
          </button>

          {isMenuOpen && (
            <div
              className={`absolute bottom-full z-50 mb-2 min-w-max rounded-lg border bg-[var(--background)] p-0 shadow-xl ${
                menuPosition === "right"
                  ? "right-0"
                  : menuPosition === "center"
                    ? "left-1/2 -translate-x-1/2"
                    : "left-0"
              }`}
            >
              <p className="text-skin-base/70 m-2 overflow-hidden text-sm text-ellipsis whitespace-nowrap">
                {hoveredEmoji
                  ? emojiReactions.find(r => r.emoji === hoveredEmoji)?.label ||
                    "发表你的看法"
                  : "发表你的看法"}
              </p>
              <div className="border-skin-line my-2 border-t"></div>
              <div className="m-2 grid grid-cols-3 gap-1">
                {emojiReactions
                  .filter(reaction => !reaction.defaultShow)
                  .map(reaction => (
                    <button
                      key={reaction.emoji}
                      aria-label={
                        reaction.isActive
                          ? `取消 ${reaction.label}`
                          : `表示 ${reaction.label}`
                      }
                      type="button"
                      className={`p-1.5 transition-all duration-200 hover:scale-125 ${
                        reaction.isActive
                          ? "has-reacted bg-skin-accent/10 border-skin-accent text-skin-accent"
                          : "border-skin-line hover:bg-skin-fill"
                      }`}
                      onClick={() =>
                        handleEmojiClick(emojiReactions.indexOf(reaction))
                      }
                      onMouseEnter={() => setHoveredEmoji(reaction.emoji)}
                      onMouseLeave={() => setHoveredEmoji(null)}
                    >
                      <span className="text-base">{reaction.emoji}</span>
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmojiReactions;
