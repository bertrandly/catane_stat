<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *     normalizationContext={"groups"={"game"}},
 *     attributes={"order"={"createdAt": "DESC"}}
 * )
 * @ORM\Entity(repositoryClass="App\Repository\GameRepository")
 */
class Game
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"game"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"game"})
     */
    private $name;

    /**
     * @ORM\Column(type="datetime")
     * @Groups({"game"})
     */
    private $createdAt;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\DiceResult", mappedBy="game", orphanRemoval=true)
     * @Groups({"game"})
     */
    private $diceResults;

    public function __construct()
    {
        $this->diceResults = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * @return Collection|DiceResult[]
     */
    public function getDiceResults(): Collection
    {
        return $this->diceResults;
    }

    public function addDiceResult(DiceResult $diceResult): self
    {
        if (!$this->diceResults->contains($diceResult)) {
            $this->diceResults[] = $diceResult;
            $diceResult->setGame($this);
        }

        return $this;
    }

    public function removeDiceResult(DiceResult $diceResult): self
    {
        if ($this->diceResults->contains($diceResult)) {
            $this->diceResults->removeElement($diceResult);
            // set the owning side to null (unless already changed)
            if ($diceResult->getGame() === $this) {
                $diceResult->setGame(null);
            }
        }

        return $this;
    }
}
