import React, { useState } from "react";
import styled from "styled-components";
import { CopyIcon } from "@sistent/sistent";

// ─── Overlay ────────────────────────────────────────────────────────────────
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1300;
  /* subtle entrance */
  animation: fadeIn 0.18s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

// ─── Modal Card ──────────────────────────────────────────────────────────────
const ModalCard = styled.div`
  background: ${({ theme }) => theme.body || "#1e2227"};
  border: 1px solid ${({ theme }) => theme.border || "#2d3139"};
  border-radius: 12px;
  padding: 2rem;
  width: min(560px, 92vw);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
  animation: slideUp 0.2s ease;
  position: relative;

  @keyframes slideUp {
    from { transform: translateY(24px); opacity: 0; }
    to   { transform: translateY(0);    opacity: 1; }
  }
`;

// ─── Header row ─────────────────────────────────────────────────────────────
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
`;

const Title = styled.h2`
  font-size: 1.15rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text || "#ffffff"};
  margin: 0;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text || "#ffffff"};
  font-size: 1.4rem;
  line-height: 1;
  padding: 2px 6px;
  border-radius: 4px;
  opacity: 0.7;
  transition: opacity 0.15s;

  &:hover { opacity: 1; }
`;

// ─── Sub-label ───────────────────────────────────────────────────────────────
const SubLabel = styled.p`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.textMuted || "#8b949e"};
  margin: 0 0 1rem 0;
`;

// ─── Code block ──────────────────────────────────────────────────────────────
const CodeBlock = styled.div`
  position: relative;
  background: ${({ theme }) => theme.codeBackground || "#0d1117"};
  border: 1px solid ${({ theme }) => theme.border || "#2d3139"};
  border-radius: 8px;
  padding: 1rem 3rem 1rem 1rem;
  margin-bottom: 1.25rem;
`;

const CoordText = styled.pre`
  color: #00b39f;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  font-size: 0.85rem;
  line-height: 1.6;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-all;
`;

const InlineCopyButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: 1px solid ${({ theme }) => theme.border || "#2d3139"};
  border-radius: 6px;
  cursor: pointer;
  padding: 5px 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.72rem;
  color: ${({ theme }) => theme.text || "#ffffff"};
  opacity: 0.75;
  transition: opacity 0.15s, background 0.15s;

  &:hover {
    opacity: 1;
    background: ${({ theme }) => theme.border || "#2d3139"};
  }

  svg {
    width: 14px;
    height: 14px;
    fill: currentColor;
  }
`;

// ─── Action row ──────────────────────────────────────────────────────────────
const ActionRow = styled.div`
  display: flex;
  gap: 0.75rem;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  padding: 0.55rem 1.3rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, opacity 0.15s;

  &.primary {
    background: #00b39f;
    color: #fff;
    border: none;
    &:hover { background: #009684; }
  }

  &.secondary {
    background: transparent;
    color: ${({ theme }) => theme.text || "#ffffff"};
    border: 1px solid ${({ theme }) => theme.border || "#2d3139"};
    &:hover { opacity: 0.75; }
  }
`;

// ─── Component ───────────────────────────────────────────────────────────────
const CoordinatesModal = ({ coordinates, onClose, onClear, theme }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(coordinates);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // Close on overlay click (not on card click)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <Overlay onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <ModalCard theme={theme}>
        {/* ── Header ── */}
        <Header>
          <Title id="modal-title" theme={theme}>
            Polygon Coordinates
          </Title>
          <CloseButton
            theme={theme}
            onClick={onClose}
            aria-label="Close modal"
            title="Close"
          >
            ×
          </CloseButton>
        </Header>

        <SubLabel theme={theme}>
          SVG-format values normalized to the [−1, 1] range. Copy and paste
          into your Meshery Component&apos;s&nbsp;
          <code style={{ color: "#00b39f" }}>polygon</code> shape field.
        </SubLabel>

        {/* ── Code block ── */}
        <CodeBlock theme={theme}>
          <CoordText>{coordinates}</CoordText>
          <InlineCopyButton theme={theme} onClick={handleCopy} aria-label="Copy coordinates">
            {copied ? (
              "✓ Copied"
            ) : (
              <>
                <CopyIcon />
                Copy
              </>
            )}
          </InlineCopyButton>
        </CodeBlock>

        {/* ── Actions ── */}
        <ActionRow>
          <ActionButton
            className="secondary"
            theme={theme}
            onClick={onClear}
            title="Dismiss and clear the canvas to start over"
          >
            Clear &amp; Start Over
          </ActionButton>
          <ActionButton
            className="primary"
            onClick={onClose}
            title="Keep the shape on canvas and close this modal"
          >
            Done
          </ActionButton>
        </ActionRow>
      </ModalCard>
    </Overlay>
  );
};

export default CoordinatesModal;
