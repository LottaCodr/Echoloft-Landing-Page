import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { SectionLabel } from "./shared";

export default function ProjectDialog({ project, onOpenChange }) {
  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent className="project-dialog">
        {project && (
          <>
            <SectionLabel>{project.category}</SectionLabel>
            <DialogTitle>{project.name}</DialogTitle>
            <DialogDescription>{project.description}</DialogDescription>
            <div className="project-dialog-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-gallery">
              {project.gallery.map((image, i) => (
                <img
                  key={image}
                  src={image}
                  alt={`${project.name} design, page ${i + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
            <p className="modal-helper">
              Portfolio design preview. This is not a live website.
            </p>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
